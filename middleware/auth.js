export default (context) => {
  console.log('middleware--->',context);
  return Promise.resolve('auth next')
  // return Promise.reject()
}