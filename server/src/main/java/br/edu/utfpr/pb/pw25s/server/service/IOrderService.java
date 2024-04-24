package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.dto.OrderDTO;
import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;

import java.util.List;

public interface IOrderService extends ICrudService<Order, Long>{

    List<OrderDTO> findOrdersByUserId(Long userId);

    Order saveOrder(Order order, List<OrderItemDTO> orderItemDTOList);

}
