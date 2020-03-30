function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const index = {
    title: 'Who am I?',
    subtitle: `I am a ${calculate_age(
        new Date(1995, 5, 23)
    )} year old Brit living in The Netherlands. <br> 
    I love 🍕 and 🎸<br>
    I dislike peas and rainy weekends 🤢<br>
    If you are reading this, I am probably looking for a job so I would also like to say, I am the most amazing colleague <span class='italics'>ever</span> and I am both <span class='italics'>incredibly witty</span> and <span class='italics'>talented</span>`,
    blob: [
        { title: 'Specialisation?', description: 'Javascript' },
        {
            title: 'Experience?',
            description: `~${calculate_age(new Date(2016, 3, 29))} years`,
        },
        {
            title: 'Degree?',
            description:
                "BSc. Computer Science with International Experience <span class='italics'>- Bangor University</span>",
        },
        {
            title: 'Favourite frameworks/Libraries?',
            description: 'Svelte but I also love React and Angular',
        },
        {
            title: 'What do you love most about Frontend work?',
            description: 'Knowing that people get to see and interact with what I have made',
        },
    ],
};

export default index;
