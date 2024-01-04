import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DeveloperModule } from './developer/developer.module';
import { ManagerModule } from './manager/manager.module';
import { ProductModule } from './product/product.module';
import { ProjectModule } from './project/project.module';
import { TicketModule } from './ticket/ticket.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DeveloperModule,
    ManagerModule,
    ProductModule,
    ProjectModule,
    TicketModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
