import ArrowDown from "@/components/ui/icons/arrow-down"
import { cn } from "@/lib/utils"

const ScrollDownBadge = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn(
                "rounded-full bg-linear-to-b from-[#214517] to-[rgba(105,117,102,0.2)] p-[0.88px] shadow-[0px_3.52px_3.52px_0px_#00000040]",
                className,
            )}
            {...props}
        >
            <div className="flex items-center gap-2 rounded-full bg-background px-2 py-2 [writing-mode:sideways-rl] lg:px-3">
                <span className="font-michroma text-[8px] lg:text-sm">SCROLL DOWN</span>
                <div className="flex size-4 items-center justify-center rounded-full bg-white lg:size-7">
                    <ArrowDown className="size-2 text-primary lg:size-4" />
                </div>
            </div>
        </div>
    )
}

export default ScrollDownBadge
