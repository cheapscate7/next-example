function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const index = {
    title: 'Who am I?',
    subtitle: `I am a ${calculate_age(
        new Date(1995, 5, 23)
    )} year old Brit Living in The Netherlands and, if you are reading this, I am probably looking for a job.`,
    blob: [
        { title: 'Specialisation?', description: 'Javascript' },
        { title: 'Experience?', description: '3 years' },
        {
            title: 'Degree?',
            description:
                "BSc. Computer Science with International Experience <span class='italics'>- Bangor University</span>",
        },
        {
            title: 'Favourite frameworks?',
            description: 'Svelte but I also love React and Angular',
        },
    ],
};

export default index;
