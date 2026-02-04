import ScrollDownBadge from "@/components/features/scroll-down-badge"
import { buttonVariants } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { missionAndVision, stats, team, whatWeOffer } from "@/constants/about-us"
import { cn } from "@/lib/utils"
import { createFileRoute, Link } from "@tanstack/react-router"
import { ArrowUpLeft } from "lucide-react"

export const Route = createFileRoute("/about-us")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <header className="relative pt-10 lg:pt-0">
                <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[url('/images/high-rise-building.png'),linear-gradient(var(--primary),var(--primary))] bg-cover bg-top bg-no-repeat lg:h-[85%]" />

                <div className="relative w-contain flex flex-col-reverse items-end gap-6 lg:flex-row lg:gap-0 lg:-space-x-20">
                    <img src="/images/constructor.png" alt="Construction worker" className="hidden lg:block" />
                    <img src="/images/constructor-mobile.png" alt="Construction worker" className="block lg:hidden" />

                    <div className="space-y-2 text-center lg:space-y-6 lg:py-6 lg:text-left">
                        <h2 className="text-3xl lg:text-[5rem]">About Us</h2>
                        <h3 className="lg:text-[2.8125rem]">Who we are</h3>

                        <div className="mt-4 flex items-center gap-10 lg:mt-0 lg:gap-20">
                            <p className="text-sm lg:text-lg">
                                Moniak is a customer focused construction support company with over seven years
                                experience in offering a unique and comprehensive range of support solutions to
                                construction industries across Nigeria. We handle support operations ranging from
                                Personnel management Logistics management Construction planning (from Preconstruction,
                                Construction and Post construction stage) Direct Labor hire Sourcing and Leasing of
                                Plant and Equipment Supply of building materials and a host of other construction
                                support functions in totality and have partners experienced. Moniak (Nigeria) Limited
                                has extensive expertise and are involved with firms having pool of experts across the
                                globe who ensures the delivery of quality projects. Moniak Project & construction
                                Delivery and Implementation managers work personally with each client throughout the
                                duration of the project to ensure that clients meet their project goals and budgets.
                            </p>

                            <ScrollDownBadge className="absolute right-0 bottom-4 shrink-0 *:bg-inherit lg:static" />
                        </div>
                    </div>
                </div>
            </header>

            {/* What we offer */}
            <section className="w-contain flex flex-col gap-20 py-15">
                <div className="flex flex-col items-center gap-10 lg:flex-row">
                    <div className="space-y-6">
                        <h5 className="lg:text-[2.8125rem]">What we offer</h5>
                        <ul className="flex flex-col gap-2 text-sm lg:text-lg">
                            {whatWeOffer.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <img src="/icons/circle-check.svg" alt="" className="mt-1 size-4 lg:size-auto" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative flex w-fit items-center">
                        <img
                            src="/images/construction-rails.svg"
                            alt=""
                            className="max-w-70 rounded-full border-2 border-dashed border-white p-0.5 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-none"
                        />
                        <Link
                            to="/"
                            className={cn(
                                buttonVariants(),
                                "absolute right-0 size-14 translate-x-1/2 rounded-full shadow-[0px_3.52px_3.52px_0px_#00000040] sm:size-18 md:size-20 lg:size-25",
                            )}
                        >
                            <ArrowUpLeft className="size-6 sm:size-7 md:size-8 lg:size-10" />
                        </Link>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {missionAndVision.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-5 bg-primary px-4 py-8">
                            <h5 className="text-2xl lg:text-[2.8125rem]">{item.title}</h5>
                            <p className="text-center text-sm lg:text-lg">{item.description}</p>
                            <img src={item.image} alt="" className="lg:mt-5" />
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_1.63%,rgba(106,106,106,0)_48.41%,rgba(0,0,0,0.68)_100%),linear-gradient(0deg,#114B21,#114B21)] py-15 lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_1.35%,rgba(0,0,0,0)_48.72%,rgba(0,0,0,0.68)_100%),linear-gradient(0deg,#114B21,#114B21)]">
                <div className="w-contain grid grid-cols-2 justify-items-center gap-4 lg:grid-cols-4 lg:gap-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <img src={stat.image} alt="" className="size-10 shrink-0 lg:size-auto" />
                            <div className="flex flex-col items-center">
                                <h5 className="text-lg lg:text-[2.8125rem]">{stat.value}</h5>
                                <p className="text-[10px] lg:text-lg">{stat.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Team */}
            <section className="w-contain py-15">
                <div className="space-y-2 text-center lg:space-y-4">
                    <h5 className="text-xs text-[#227F3C] lg:text-3xl">The Team</h5>
                    <h2 className="text-sm lg:text-[2.8125rem]">Meet our Leaders</h2>
                    <p className="mt-4 text-xs lg:text-lg">
                        Our team is made up of experienced professionals who are passionate
                        <br className="md-br" /> about what they do. We believe in working together to achieve our goals
                        and we are always
                        <br className="md-br" /> looking for new ways to improve and innovate.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="mt-10 lg:mt-20"
                >
                    <CarouselContent>
                        {team.map((member, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="flex flex-col overflow-hidden rounded-[10px] bg-[#D4D4D440]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="aspect-square w-full object-cover"
                                    />
                                    <div className="flex flex-col px-5 py-5 pb-8">
                                        <h5 className="font-montserrat text-lg font-semibold lg:text-2xl">
                                            {member.name}
                                        </h5>
                                        <p className="text-xs lg:text-lg">{member.position}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <CarouselPrevious className="static size-15 translate-y-0 bg-primary *:[svg]:size-6!" />
                        <CarouselNext className="static size-15 translate-y-0 bg-primary *:[svg]:size-6!" />
                    </div>
                </Carousel>
            </section>
        </main>
    )
}
