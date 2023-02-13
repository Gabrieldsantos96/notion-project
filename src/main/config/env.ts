export default {
  mongoUrl: `mongodb+srv://gsantos:${process.env.MONGO_PASS}@cluster0.xvucjq8.mongodb.net/?retryWrites=true&w=majority`,
  port: process.env.PORT || 3333
}
