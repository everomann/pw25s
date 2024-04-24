package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItem;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderItemService;
import br.edu.utfpr.pb.pw25s.server.service.IOrderService;
import br.edu.utfpr.pb.pw25s.server.service.UserService;
import br.edu.utfpr.pb.pw25s.server.shared.GenericResponse;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("orders")
public class OrderController extends CrudController<Order, OrderDTO, Long> {

    private static IOrderService orderService;
    private static IOrderItemService orderItemService;
    private static ModelMapper modelMapper;
    private final UserService userService;

    public OrderController(IOrderService orderService, IOrderItemService orderItemService,ModelMapper modelMapper, UserService userService) {

        super(Order.class, OrderDTO.class);
        OrderController.orderService = orderService;
        OrderController.orderItemService = orderItemService;
        OrderController.modelMapper = modelMapper;
        this.userService = userService;
    }

    @Override
    protected ICrudService<Order, Long> getService() {
        return orderService;
    }

    @Override
    protected ModelMapper getModelMapper() {

        return modelMapper;
    }

    @GetMapping("/myOrders")
    public ResponseEntity<List<OrderDTO>> listOrdersByUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            long userId;

            if (principal instanceof String) {
                String username = (String) principal;
                userId = userService.getUserIdByUsername(username);
            } else {
                userId = 0;
            }

            List<OrderDTO> orders = orderService.findOrdersByUserId(userId);

            if (!orders.isEmpty()) {
                return ResponseEntity.ok(orders);
            } else {
                return ResponseEntity.noContent().build();
            }
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/createOrder")
    public ResponseEntity<GenericResponse> createOrder(@Valid @RequestBody OrderDTO orderDTO) {

        List<OrderItemDTO> orderItemsDTO = orderDTO.getOrderItems();
        orderDTO.setOrderItems(new ArrayList<>());

        Order order = orderService.saveOrder(convertToEntity(orderDTO), orderItemsDTO);

        List<OrderItem> orderItems = orderItemService.addOrderItems(orderItemsDTO, order);

        if (orderItems.isEmpty()){
            return ResponseEntity.badRequest().build();
        }

        orderDTO.setId(order.getId());
        orderDTO.setTotalPrice(order.getTotalPrice());
//        orderDTO.setOrderDate(order.getOrderDate());
//        orderDTO.setUser(order.getUser());
        orderDTO.setOrderItems(orderItemsDTO);

        return ResponseEntity.status(HttpStatus.CREATED).build();


    }
}