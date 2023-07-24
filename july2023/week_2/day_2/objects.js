let user={};
user.name="john"
user.surname="smith"
// alert(user.name)
for (let key in user){
    alert(key)
    alert(user[key])
};
user.name="pete"
alert(user.name)

delete user.name
for (let key in user){rm -f .git/index.lock
    alert(key)
    alert(user[key])
}
