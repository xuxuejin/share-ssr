import express from 'express'
const PORT = 3309;
const app = express()
// 静态资源ok
app.use(express.static('public'))
// 接口正确
app.get("/api/getSchoolList", (req, res) => {
    let schoolList = [
        { id: 1, name: "大学1" },
        { id: 2, name: "大学2" },
        { id: 3, name: "大学3" },
    ];
    return res.json({ schoolList });
});
  

app.get('*', (req, res) => {
    res.send('ok');
})
// 服务ok
app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`Server is running at http://localhost:${PORT}`)
    }
})
