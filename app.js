// https://www.youtube.com/watch?v=qZXt1Aom3Cs
// time 19:53
const app = Vue.createApp({
    data() {
        return {
            name: "Jane Doe",
            age: 26,
            profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
            aboutMe: "hello I am about to start a new job with php and larvel",
            github: "https://github.com/liamcclane",
            gender: "female"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            // console.log(results);
            this.aboutMe += this.aboutMe;
            this.name = results[0].name.first + " " + results[0].name.last;
            this.profilePic = results[0].picture.large
            this.gender = results[0].gender;
        }
    }
})

app.mount('#app')