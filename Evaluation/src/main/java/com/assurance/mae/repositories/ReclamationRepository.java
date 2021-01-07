package com.assurance.mae.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.assurance.mae.entities.Reclamation;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long>{
	
	@Query("SELECT u FROM Reclamation u  where u.ref= :ref")
	Reclamation findByIdRef(@Param("ref") String refernce);
	
	
	@Query("SELECT u FROM Reclamation u  where u.appUser.userId= :userId")
	List<Reclamation> getMyReclamation(@Param("userId") Long userId);
	
	@Modifying
	@Query("delete from Reclamation b where b.id=:id")
	void deleteReclamations(@Param("id") Long id);

}
