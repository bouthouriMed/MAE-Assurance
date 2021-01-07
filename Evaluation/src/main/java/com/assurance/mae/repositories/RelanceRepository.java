package com.assurance.mae.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.assurance.mae.entities.Relance;

@Repository
public interface RelanceRepository extends JpaRepository<Relance, Long>{
	
	@Query("SELECT u FROM Relance u  where u.code= :code")
	Relance findByCode(@Param("code") String code);

}
