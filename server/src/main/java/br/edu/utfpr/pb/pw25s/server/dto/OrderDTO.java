package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.User;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class OrderDTO {

    private Long id;

    @NotNull
    private BigDecimal totalPrice;

    @NotNull
    private Date orderDate;

    private User user;
}
