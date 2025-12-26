import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
 
import { Button } from "@/components/ui/button"
import { AiOutlinePlus } from "react-icons/ai"
// import { getAllTodos } from "@/api"


export default  function Home() {
//   const tasks = await getAllTodos();
//   console.log(tasks);

  return (
     <main className="max-w-4xl mx-auto center mt-4">
        <div className="text-center my5 flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold">
             Todo List App
            </h1> 
            <Button className="btn btn-primary w-full">Adicione uma Tarefa <AiOutlinePlus className="ml-2" size={18}></AiOutlinePlus>  
            </Button>
        </div>

          <div>
              <Table>
                <TableCaption>A lista de tarefas recentes.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Task</TableHead>
                     <TableHead>Description</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Rancho</TableCell>
                    <TableCell>Acabou o rancho, precisa ir la para encher a dispensa</TableCell>
                    <TableCell>em andamento</TableCell>

                    <TableCell className="text-right"><Button>Apagar</Button> <Button>Editar</Button></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </div>
  
    </main>

  )
}