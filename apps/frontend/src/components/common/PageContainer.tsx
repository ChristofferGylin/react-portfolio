import type { ReactNode } from "react"

const PageContainer = ({children}:{ children: ReactNode}) => {
    return (
        <div className="flex flex-col w-full lg:w-3/4 min-h-0 p-10 lg:px-0">
            {children}
        </div>
    )
}

export default PageContainer