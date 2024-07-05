package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.OrderItem;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderItemService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("orderItems")
public class OrderItemController extends CrudController<OrderItem, OrderItemDTO, Long>{

    private static IOrderItemService orderItemService;
    private static ModelMapper modelMapper;

    public OrderItemController(IOrderItemService orderItemService, ModelMapper modelMapper){

        super(OrderItem.class, OrderItemDTO.class);
        this.orderItemService = orderItemService;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<OrderItem, Long> getService( ){
        return orderItemService;
    }

    @Override
    protected ModelMapper getModelMapper() {

        return modelMapper;
    }
}
