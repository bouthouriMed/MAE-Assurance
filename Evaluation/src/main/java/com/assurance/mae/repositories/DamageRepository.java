package com.assurance.mae.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.assurance.mae.entities.Damage;

@Repository
public interface DamageRepository extends JpaRepository<Damage, Long> {
	
	
	@Modifying
	@Query("delete from Damage b where b.reclamation.id=:id")
	void deleteDamages(@Param("id") Long id);

}
