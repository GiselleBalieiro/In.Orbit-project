import logo from "../assets/logo-inorbit.svg"
import letsStart from "../assets/lets-start-illustration.svg" 
import { DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Plus } from "lucide-react"

export function EmptyGoal () {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="in-orbit"></img>
        <img src={letsStart} alt="in-orbit"></img>
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta. Cadastre uma agora mesmo!
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>
    )
}