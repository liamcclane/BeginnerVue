// https://www.youtube.com/watch?v=qZXt1Aom3Cs
// time 19:53
const app = Vue.createApp({
    data() {
        return {
            name: "Jane Doe",
            age: 26,
            profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
            aboutMe: "hello I am 26 years old and about to start a new job working in vue with php and larvel",
            github: "https://github.com/liamcclane",
            gender: "female"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();
            console.log(results);
            if(this.name == "Jane Doe") {
                this.name = 'Jason';
                this.age = 55;
                this.profilePic = "https://randomuser.me/api/portraits/men/10.jpg";
                this.aboutMe = "SOMETHIGANDA Eadasdl lorem";
                this.gender = "male"
            } else {
                this.name =  "Jane Doe";
                this.age =  26;
                this.profilePic =  "https://randomuser.me/api/portraits/women/10.jpg";
                this.aboutMe =  "hello I am 26 years old and about to start a new job working in vue with php and larvel";
                this.github =  "https://github.com/liamcclane";
                this.gender =  "female";
            }
        }
    }
})

app.mount('#app')