package br.edu.utfpr.pb.pw25s.server.controller;

import br.edu.utfpr.pb.pw25s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw25s.server.model.Product;
import br.edu.utfpr.pb.pw25s.server.service.ICrudService;
import br.edu.utfpr.pb.pw25s.server.service.IProductService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController extends CrudController<Product, ProductDTO, Long> {

    private static IProductService productService;

    private static ModelMapper modelMapper;

    public ProductController(IProductService productService, ModelMapper modelMapper) {
        super(Product.class, ProductDTO.class);
        ProductController.productService = productService;
        ProductController.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<Product, Long> getService() {

        return productService;
    }

    @Override
    protected ModelMapper getModelMapper() {

        return modelMapper;
    }

    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<ProductDTO>> listProductsByCategory(@PathVariable Long categoryId) {
        List<ProductDTO> products = productService.findProductsByCategory(categoryId);
        if (!products.isEmpty()) {
            return ResponseEntity.ok(products);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
