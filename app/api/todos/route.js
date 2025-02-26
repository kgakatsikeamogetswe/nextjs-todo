import next from "next";
import { NextResponse } from "next/server"

let todos = [
    {
        id: 1, 
        name : "Learn Node.js",
    },
    {
        id: 2,
        name : "Learn React",
    },
    {
        id: 3,
        name : "Learn Angular",
    }
]

export async function GET(){
    return NextResponse.json({todos})
}

export async function DELETE(request){

    const data = await request.json();

    todos = todos.filter(todo => todo.id !== data.id)

    console.log("debug", todos) //debuging

    return NextResponse.json({todos})
}

export async function POST(request){
    const data = await request.json();

    const newTodo = {id: todos.length + 1, name: data.todoName};
    todos.push(newTodo);

    return NextResponse.json({todos});
}