package com.app.Entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="roles")
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
public class UserRole extends BaseId{
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private Role roleName;
}
