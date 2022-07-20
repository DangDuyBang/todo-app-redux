import { createServer, Model } from 'miragejs'

// Cấu hình viết mock API(fake API)

// Redux Middleware nó sinh ra để cho chúng ta có thể viết các đoạn logic bất đồng bộ ở trong redux
// Middleware nó là 1 function nhận vào 2 tham số (dispatch và getState)
// và ví dụ Middleware ở đây là redux-thunk, thay vì dispatch(action), nó sẽ dispatch(thunk-function(thunk-action))

export const setupServer = () => {
    let server = createServer({ // cấu hình cho nó để trở thành server dạng động 
        models: {
            todos: Model
        },
        routes() {
            this.get('/api/todos', (schema) => {
                return schema.todos.all();
            });

            this.post('/api/todos', (schema, request) => {
                const payload = JSON.parse(request.requestBody); // Chuyển một cái String sang một Object JS

                return schema.todos.create(payload);
            });

            this.post('/api/updateTodo', (schema, request) => {
                const id = JSON.parse(request.requestBody);

                const currentTodo = schema.todos.find(id);

                currentTodo.update({ completed: !currentTodo.completed });

                return currentTodo;
            })
        }
    })

    // server.get("/api/todos", {
    //     todos: [ // Đây là server dạng tĩnh
    //         { id: '1', name: 'Learn React', completed: false, priority: "High" },
    //         { id: '2', name: 'Learn Redux', completed: true, priority: "Low" },
    //         { id: '3', name: 'Learn Database', completed: false, priority: "Medium" },
    //     ],
    // });
}