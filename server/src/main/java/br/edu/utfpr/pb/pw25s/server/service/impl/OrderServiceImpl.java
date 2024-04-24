package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.repository.OrderRepository;
import br.edu.utfpr.pb.pw25s.server.repository.UserRepository;
import br.edu.utfpr.pb.pw25s.server.service.IOrderService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl extends CrudServiceImpl<Order, Long> implements IOrderService {

    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    public OrderServiceImpl(OrderRepository orderRepository, UserRepository userRepository) {

        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
    }

    @Override
    protected JpaRepository<Order, Long> getRepository() {
        return orderRepository;
    }

    @Transactional(readOnly = true)
    public List<OrderDTO> findOrdersByUserId(Long userId) {
        List<Order> orders = orderRepository.findByUserId(userId);

        return orders.stream()
                .map(OrderDTO::fromOrder)
                .collect(Collectors.toList());
    }

    @Override
    public Order saveOrder(Order order, List<OrderItemDTO> orderItemDTOList) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();


        BigDecimal totalPrice = BigDecimal.ZERO;
        for (OrderItemDTO orderItemDTO : orderItemDTOList){
            totalPrice = totalPrice.add(orderItemDTO.getPrice().multiply(BigDecimal.valueOf(orderItemDTO.getQuantity())));
        }

        order.setTotalPrice(totalPrice);
        order.setOrderDate(new Date());
        order.setUser(userRepository.findUserByUsername(username));

        return orderRepository.save(order);
    }


}
