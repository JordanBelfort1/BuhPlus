import del from 'del';

const reset = () => {
  return del(app.path.clean)
}

export { reset };