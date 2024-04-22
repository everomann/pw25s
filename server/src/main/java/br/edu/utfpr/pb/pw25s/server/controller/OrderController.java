package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("orders")
public class OrderController extends CrudController<Order, OrderDTO, Long> {

    private static IOrderService orderService;
    private static ModelMapper modelMapper;

    public OrderController(IOrderService orderService, ModelMapper modelMapper) {

        super(Order.class, OrderDTO.class);
        OrderController.orderService = orderService;
        OrderController.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<Order, Long> getService() {
        return orderService;
    }

    @Override
    protected ModelMapper getModelMapper() {

        return modelMapper;
    }
}