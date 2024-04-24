package br.edu.utfpr.pb.pw25s.server.service;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;

import java.util.List;

public interface  IProductService extends ICrudService<Product, Long>{

    List<ProductDTO> findProductsByCategory(Long categoryId);
}
