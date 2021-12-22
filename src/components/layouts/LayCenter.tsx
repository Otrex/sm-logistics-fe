export default function LayCenter(props: any) {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        {props.children}
      </div>
    </>
  );
}
