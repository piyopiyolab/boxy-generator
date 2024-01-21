import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"

export default function Footer() {
    return (
        <>
            <footer className="p-2 border-t-2 border-gra-200">
                <div class="px-5 py-2 xl:max-w-maxw m-auto text-center text-sm font-bold ">
                    <div className="flex gap-4 justify-center py-2">

                        <a href="https://github.com/piyopiyolab"><img
                            className="w-6"
                            src={github} alt="github Marion Piouceau" /></a>
                        <a href="https://www.linkedin.com/in/marionpiouceau/"><img
                            className="w-6"
                            src={linkedin} alt="Linkedin Marion Piouceau" />
                        </a>

                    </div>
                    Copyrights © 2023 | All Rights Reserved with Marion Piouceau.
                </div>
            </footer></>
    )
}