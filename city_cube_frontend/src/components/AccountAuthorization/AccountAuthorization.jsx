import Login from "@features/Login/Login";
import SignUp from "@features/SignUp/SignUp";
import { useState } from "react";

const PageType = {
    Login: 1,
    SignUp: 2,
}
export default function AccountAuthorization() {
    const [pageType, setPageType] = useState(PageType.Login);

    function switchPageType(pageType) {
        setPageType(pageType);
    }

    return (
        <>
        {pageType === PageType.Login && <Login setPageType={() => switchPageType(PageType.SignUp)}/>
        || 
        pageType === PageType.SignUp && <SignUp setPageType={() => switchPageType(PageType.Login)}/>}
        </>
    )
}