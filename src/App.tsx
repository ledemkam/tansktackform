import { UserForm } from "./components/UserForm";

export default function App() {
  return (
    <div className="w-full h-full bg-background flex flex-col items-center">
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"> TanStack Form</h1>
      <div className="mt-10">

       <UserForm />
      </div>
    </div>
  )
}
