import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

import { ProductsModule } from './products/products.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://uuol:0lVYbsOblztb5SQ8@catalog.j1eua.mongodb.net/uuol?retryWrites=true&w=majority'),
    //MongooseModule.forRoot('mongodb://localhost:27017/uuol'),
    GraphQLModule.forRoot({    
        include: [ProductsModule],
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        playground: true,
        debug: false,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
