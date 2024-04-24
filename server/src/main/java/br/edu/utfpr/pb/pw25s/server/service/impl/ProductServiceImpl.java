package br.edu.utfpr.pb.pw25s.server.service.impl;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.repository.ProductRepository;
import br.edu.utfpr.pb.pw25s.server.service.IProductService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl extends CrudServiceImpl<Product, Long>
        implements IProductService {

    private final ProductRepository productRepository;


    public ProductServiceImpl(ProductRepository productRepository) {

        this.productRepository = productRepository;
    }

    @Override
    protected JpaRepository<Product, Long> getRepository() {

        return productRepository;
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> listProductsByCategory(Long categoryId) {
        List<Product> products = productRepository.findByCategoryId(categoryId);
        return products.stream()
                .map(ProductDTO::fromProduct)
                .collect(Collectors.toList());
    }

}
