package com.app.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "complaint")
public class Complaint extends BaseId{

	@NotEmpty(message="descr is req")
	@Length(min = 5,max=50,message="Invalid first name length")
	@Column(length = 30)
	private String c_description;

	@DateTimeFormat(pattern="dd-mm-yyyy")
	private Date c_date;
	
	//Many to One uni dir asso flatowner 1<----- *complaints
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="flat_id")
		private Flatowner flatowner;
}
