import { useEffect, useReducer } from 'react';

export function useSalesChannelList() {
    const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

    const filterBySearchString = (job: IJob) =>
        job.company_name
            .toLowerCase()
            .includes(state.searchString.toLowerCase());

    return {
        dispatch,
        state: {
            ...state,
            list: state.jobs.filter(filterBySearchString),
        },
    };
}

type State = Readonly<{
    isLoading: boolean;
    jobs: ReadonlyArray<IJob>;
    searchString: string;
    selected: ReadonlyArray<string>;
}>;

const DEFAULT_STATE: State = {
    isLoading: true,
    jobs: [],
    searchString: '',
    selected: [],
};

enum Action {
    JobSelected,
    ListChanged,
    SearchStringChanged,
    StateCleared,
}

export const JobsListActions = {
    reset() {
        return {
            type: Action.StateCleared,
        } as const;
    },
    selectJob(jobId: string) {
        return {
            payload: jobId,
            type: Action.JobSelected,
        } as const;
    },
    setSearchString(searchString: string) {
        return {
            payload: searchString,
            type: Action.SearchStringChanged,
        } as const;
    },
    setList(jobs: ReadonlyArray<IJob>) {
        return {
            payload: jobs,
            type: Action.ListChanged,
        } as const;
    },
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
type Actions = ReturnType<InferValueTypes<typeof JobsListActions>>;

function reducer(state: State, action: Actions): State {
    switch (action.type) {
        case Action.StateCleared:
            return {
                ...state,
                searchString: '',
                selected: [],
            };

        case Action.JobSelected: {
            if (state.selected.includes(action.payload)) {
                return {
                    ...state,
                    selected: state.selected.filter(
                        (item) => item !== action.payload
                    ),
                };
            }

            return {
                ...state,
                selected: state.selected.concat([action.payload]),
            };
        }

        case Action.ListChanged:
            return {
                ...state,
                isLoading: false,
                jobs: action.payload,
            };

        case Action.SearchStringChanged:
            return {
                ...state,
                searchString: action.payload
            };
    }

    return state;
}
