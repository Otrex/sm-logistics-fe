import logo from "@assets/img/logo-full-colored.png";

export function LayCenter(props: any) {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        {props.children}
      </div>
    </>
  );
}

export function LayCenterWithLogo(props: any) {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="sm:w-3/3 md:w-2/4 lg:w-1/3 m-4">
          <div className="mb-20 flex justify-center">
            <img src={logo} alt="logo" />
          </div>

          {props.children}
        </div>
      </div>
    </>
  );
}
