import React from "react";

export function Footer(){
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Annava Wisha Sikoko. All rights reserved.
            </p>
        </div>
    )
}