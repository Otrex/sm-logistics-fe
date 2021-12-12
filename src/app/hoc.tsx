export function actionToProps<C, A>(Component: C | any, actions: A) {
  const HOC = (props: any) => {
    const fullProps = { ...props, ...actions };
    return <Component {...fullProps} />;
  };
  return HOC;
}
