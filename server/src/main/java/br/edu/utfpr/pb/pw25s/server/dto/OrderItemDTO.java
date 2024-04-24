package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.OrderItem;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;

@Data
public class OrderItemDTO {

    private Long id;

    @NotNull
    private Integer quantity;

    @NotNull
    private BigDecimal price;

    private Order order;

    private Product product;

    public OrderItem convertToEntity(){
        return new ModelMapper().map(this, OrderItem.class);
    }
}
