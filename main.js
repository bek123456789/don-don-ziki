let User = +prompt(`Son tanlang \n 0) Qogoz \n 1)Quduq \n 2) Qaychi`)
let Bot = Math.floor(Math.random() * 3)


if (User === 0) {
    alert('siz qogoz tanladi')
}
else if (User === 1) {
    alert('siz quduq tanladi')
}
else if (User === 2) {
    alert('siz qaychi tanladi')
}


if (Bot === 0) {
    alert('Bot qogoz tanladi')
}
else if (Bot === 1) {
    alert('Bot quduq tanladi')
}
else if (Bot === 2) {
    alert('Bot qaychi tanladi')
}




if (User === 0 && Bot == 1) {
    alert('Siz yutdingiz!')
}
else if (User === 1 && Bot == 0) {
    alert('Siz yutqizdingiz!')
}
else if (User === 2 && Bot == 0) {
    alert('Siz yutdingiz!')
}
else if (User === 0 && Bot == 2) {
    alert('Siz yutqizdingiz!')
}


if (User === 0 && Bot == 0) {
    alert('Hich kim yutmadi.')
}
else if (User === 1 && Bot == 1) {
    alert('Hich kim yutmadi.')
}
else if (User === 2 && Bot == 2) {
    alert('Hich kim yutmadi.')
}