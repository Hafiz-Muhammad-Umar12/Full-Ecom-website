'use client'

import { ChevronUp } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { APP_NAME } from "@/lib/constants"


export default function Footer() {
    return (
        <footer className="bg-black text-white underline-link">  
        <div className="w-full">
            <Button
            variant='ghost'
            className="bg-gray-800 w-full rounded-none"
            onClick={()=> window.scrollTo({top: 0, behavior: 'smooth'})}
            >
                <ChevronUp className="mr-2 h-4 w-4"/>
                Back to top
            </Button>
            </div> 
            <div className="p-4">
                <div className="flex justify-center gap-3 text-sm">
                    <Link href='/page/conditions-of-use'>Conditions of Use</Link>
                    <Link href='/page/privacy-policy'>Privacy Notice</Link>
                    <Link href='/page/help'>Help</Link>
                    </div>
                    <div className="flex justify-center text-sm">
                        <p>© 2000-2025,{APP_NAME}, Inc. or its affiliates</p>
                    </div>
                    <div className="flex justify-center text-sm mt-8 text-gray-400">
                         123 , main Street , Karachi, Zip 7075 | +92 123 456789
                    </div>
                    </div>     
            </footer>
    )
}