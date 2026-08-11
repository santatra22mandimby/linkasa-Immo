import { Component } from "react";

class Pagenotfound extends Component {
    render() {
        return (
            <>
                <div className="authentification flex h-dvh w-svw items-center place-content-center">
                    <div className="backdrop-blur-xs bg-[#0000006e] px-8 rounded-2xl">
                        <p className=" text-[150px] font-bold text-shadow-md">404</p>
                        <p className="text-[#fff] text-[40px] mb-5"> Page Not Found </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Pagenotfound