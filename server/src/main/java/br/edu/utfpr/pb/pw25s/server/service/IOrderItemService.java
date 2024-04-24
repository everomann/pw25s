package br.edu.utfpr.pb.pw25s.server.service;


import br.edu.utfpr.pb.pw25s.server.dto.OrderItemDTO;
import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItem;

import java.util.List;

public interface IOrderItemService extends ICrudService<OrderItem, Long>{

    List<OrderItem> addOrderItems(List<OrderItemDTO> orderItemDTOS, Order order);
}
