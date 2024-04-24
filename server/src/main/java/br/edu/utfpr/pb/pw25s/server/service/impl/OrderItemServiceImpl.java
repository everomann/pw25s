package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItem;
import br.edu.utfpr.pb.pw25s.server.repository.OrderItemRepository;
import br.edu.utfpr.pb.pw25s.server.service.IOrderItemService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderItemServiceImpl extends CrudServiceImpl<OrderItem, Long>
        implements IOrderItemService {

    private final OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository){

        this.orderItemRepository = orderItemRepository;
    }

    @Override
    protected JpaRepository<OrderItem, Long> getRepository() {

        return orderItemRepository;
    }

    public List<OrderItem> addOrderItems(List<OrderItemDTO> orderItemDTOS, Order order){

        List<OrderItem> orderItems = new ArrayList<>();

        for (OrderItemDTO orderItemDTO : orderItemDTOS){

            OrderItem orderItem = orderItemDTO.convertToEntity();
            orderItems.add(orderItem);

            orderItem.setOrder(order);
            orderItemRepository.save(orderItem);
        }

        return orderItems;

    }
}
