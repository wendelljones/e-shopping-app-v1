package shopping.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EShoppingEurekaServerAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EShoppingEurekaServerAppApplication.class, args);
		System.out.println("Eureka Server Up");
	}

}
