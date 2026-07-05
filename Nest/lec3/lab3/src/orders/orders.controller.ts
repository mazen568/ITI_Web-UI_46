import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { GetOrdersFilterDto } from './dto/get-orders-filter-dto';
import { Order } from './entities/order.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from '../auth/entities/user.entity';

@ApiTags('orders')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
    type: Order,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createOrderDto: CreateOrderDto, @GetUser() client: User) {
    return this.ordersService.create(createOrderDto, client);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders with optional filter options' })
  @ApiResponse({
    status: 200,
    description: 'List of matching orders.',
    type: [Order],
  })
  findAll(@Query() filterDto: GetOrdersFilterDto) {
    return this.ordersService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order by its ID' })
  @ApiResponse({
    status: 200,
    description: 'The found order record.',
    type: Order,
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing order' })
  @ApiResponse({
    status: 200,
    description: 'The updated order record.',
    type: Order,
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete an order by its ID' })
  @ApiResponse({
    status: 204,
    description: 'The order record has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
