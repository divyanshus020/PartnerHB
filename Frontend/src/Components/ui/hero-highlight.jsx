"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center w-full h-full group",
                containerClassName
            )}
        >
            <div className="absolute inset-0 pointer-events-none bg-dot-thick-indigo-500/[0.15] -z-20" />
            <div className="absolute inset-0 pointer-events-none bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};
