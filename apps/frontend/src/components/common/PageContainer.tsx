import type { ReactNode } from "react"

const PageContainer = ({children, heightScreen}:{ children: ReactNode, heightScreen?: boolean}) => {
    return (
        <div className={`w-full flex justify-center ${heightScreen ? "min-h-[calc(100vh-8rem)]" : ""}`}>
            <div className="flex flex-col w-full lg:w-3/4 min-h-0 p-10 lg:px-0">
                {children}
            </div>
        </div>
    )
}

export default PageContainer