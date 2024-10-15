Frontend (client)



Backend

--db
    - index.js файл Применяется для соединения Backend API -> MongoDB
--models
    - User - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией User)
    - Transaction - - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией Transaction)
--routes
    - balanceRouter - url + '/set-balance'
    - userRouter    - url + '/create'