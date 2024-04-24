package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.Order;
import br.edu.utfpr.pb.pw25s.server.model.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class OrderDTO {

    private Long id;

    @NotNull
    private BigDecimal totalPrice;

    @NotNull
    private Date orderDate;

    private User user;

    @NotNull
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItemDTO> orderItems = new ArrayList<>();

    public static OrderDTO fromOrder(Order order){
        return new ModelMapper().map(order, OrderDTO.class);
    }
}
