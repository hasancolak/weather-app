/**
 *(Function) this is the custom scroll hook using mouse wheel event
 *(Return) listenScrollEvent
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useScroll(target: any) {
  const listenScrollEvent = (event: any) => {
    const toLeft = event.deltaY < 0 && target.current.scrollLeft > 0;
    const toRight =
      event.deltaY > 0 &&
      target.current.scrollLeft <
        target.current.scrollWidth - target.current.clientWidth;

    if (toLeft || toRight) {
      event.stopPropagation();
      target.current.scrollLeft += event.deltaY;
    }
  };

  return {
    listenScrollEvent,
  };
}

export default useScroll;
