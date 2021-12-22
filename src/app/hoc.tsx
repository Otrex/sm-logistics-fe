import { useAppDispatch, useAppSelector } from './hooks';
import { mapDispatchToProps, mapStateToProps } from './utils';

export function mapStateOrActionToProps<CProps = {}, A = {}, S = {}>(
  Component: (props: any) => JSX.Element,
  dispatchActions?: A,
  states?: S
) {
  const HOC = (props: CProps) => {
    const dispatcher = useAppDispatch();
    let fullProps = { ...props };

    if (dispatchActions) {
      const mappedActions = mapDispatchToProps<A>(dispatchActions, dispatcher);
      fullProps = { ...fullProps, ...mappedActions };
    }
    if (states) {
      const mappedState = mapStateToProps<S>(states, useAppSelector);
      fullProps = { ...fullProps, ...mappedState };
    }

    return <Component {...fullProps} />;
  };
  return HOC;
}
