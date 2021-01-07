package com.assurance.mae.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.assurance.mae.entities.AppUser;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long>{
	
	@Query("SELECT u FROM AppUser u  where u.userName= :userName and isBlock=false")
	AppUser findByUserName(@Param("userName") String userName);
	
	@Query("SELECT u FROM AppUser u  where u.userId= :userId")
	AppUser findByIdUser(@Param("userId") Long userId);

}
